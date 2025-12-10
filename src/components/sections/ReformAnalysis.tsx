import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TabContent {
    id: string;
    title: string;
    icon: string;
    content: string[];
}

const ReformAnalysis: React.FC = () => {
    const [activeTab, setActiveTab] = useState('context');

    const tabs: TabContent[] = [
        {
            id: 'context',
            title: 'Bối Cảnh',
            icon: '📊',
            content: [
                '🔴 Lạm phát tăng cao (453% năm 1986)',
                '🔴 Sản xuất đình trệ, thiếu hụt hàng hóa trầm trọng',
                '🔴 Thâm hụt ngân sách, nợ công gia tăng',
                '🔴 Đời sống nhân dân khó khăn, tiền lương mất giá',
                '🔴 Cơ chế kế hoạch hóa tập trung cứng nhắc',
            ],
        },
        {
            id: 'reform',
            title: 'Nội Dung Cải Cách',
            icon: '💰',
            content: [
                '💵 Phá giá đồng tiền (đổi 10 đồng cũ = 1 đồng mới)',
                '💵 Tăng lương gấp 7-10 lần',
                '💵 Điều chỉnh giá cả sát với thị trường',
                '💵 Bãi bỏ cơ chế bao cấp',
                '💵 Thống nhất giá nội địa và xuất khẩu',
            ],
        },
        {
            id: 'impact',
            title: 'Tác Động Trực Tiếp',
            icon: '⚡',
            content: [
                '❌ Thất bại: Lạm phát tiếp tục tăng cao',
                '❌ Người dân mất lòng tin vào đồng tiền',
                '❌ Sản xuất không phục hồi như kỳ vọng',
                '✅ Nhưng: Đảng nhận ra cần đổi mới toàn diện',
                '✅ Mở đường cho tư duy mới tại Đại hội VI',
            ],
        },
        {
            id: 'lesson',
            title: 'Bài Học Lịch Sử',
            icon: '📚',
            content: [
                '💡 Không thể cải cách cục bộ, phải đổi mới toàn diện',
                '💡 Phải thay đổi tư duy từ kế hoạch hóa sang thị trường',
                '💡 Cần đồng bộ giữa chính sách kinh tế và xã hội',
                '💡 Tôn trọng quy luật kinh tế khách quan',
                '💡 Dám nghĩ, dám làm, dám chịu trách nhiệm',
            ],
        },
    ];

    const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

    return (
        <section className="py-20 bg-gradient-to-br from-red-50 via-white to-yellow-50 relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-red-300 rounded-full filter blur-3xl opacity-20"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Câu Hỏi Chủ Đề
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                            Cải Cách Giá-Lương-Tiền 1985
                        </span>
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Vì sao công cuộc cải cách về giá-lương-tiền lại là <strong>nguyên nhân trực tiếp</strong> dẫn tới
                        quyết định đổi mới toàn diện nền kinh tế Việt Nam tại Đại hội Đảng VI?
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-red-600 to-yellow-600 text-white shadow-xl'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.title}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <motion.div
                                    className="text-5xl"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {currentTab.icon}
                                </motion.div>
                                <h3 className="text-3xl font-bold text-gray-900">{currentTab.title}</h3>
                            </div>

                            <div className="space-y-4">
                                {currentTab.content.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-md transition-all"
                                    >
                                        <motion.div
                                            className="text-2xl"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 1, delay: index * 0.2, repeat: Infinity }}
                                        >
                                            {item.split(' ')[0]}
                                        </motion.div>
                                        <p className="text-lg text-gray-700 flex-1">
                                            {item.split(' ').slice(1).join(' ')}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Summary Box */}
                <motion.div
                    className="mt-12 max-w-4xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-gradient-to-br from-red-600 to-yellow-600 rounded-2xl shadow-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <span className="text-3xl">💡</span>
                            Kết Luận
                        </h3>
                        <p className="text-lg leading-relaxed">
                            Cải cách giá-lương-tiền 1985 tuy thất bại nhưng là <strong>bước thử nghiệm dũng cảm</strong>,
                            giúp Đảng nhận ra rằng <strong>không thể cải cách cục bộ</strong> trong khi vẫn duy trì cơ chế
                            kế hoạch hóa tập trung. Thất bại này chính là <strong>tiền đề trực tiếp</strong> để Đảng
                            quyết định đổi mới toàn diện tại Đại hội VI (12/1986), mở ra kỷ nguyên mới cho đất nước.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ReformAnalysis;
