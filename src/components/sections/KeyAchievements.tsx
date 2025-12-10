import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

interface Achievement {
    id: number;
    icon: string;
    title: string;
    value: number;
    suffix: string;
    description: string;
    color: string;
}

const KeyAchievements: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const achievements: Achievement[] = [
        {
            id: 1,
            icon: '📈',
            title: 'Tăng Trưởng GDP',
            value: 7,
            suffix: '%',
            description: 'Tốc độ tăng trưởng trung bình 1986-2020',
            color: 'from-blue-500 to-blue-700',
        },
        {
            id: 2,
            icon: '🏭',
            title: 'Công Nghiệp Hóa',
            value: 40,
            suffix: '%',
            description: 'Đóng góp công nghiệp vào GDP',
            color: 'from-purple-500 to-purple-700',
        },
        {
            id: 3,
            icon: '🌾',
            title: 'An Ninh Lương Thực',
            value: 45,
            suffix: 'M tấn',
            description: 'Xuất khẩu gạo hàng năm',
            color: 'from-green-500 to-green-700',
        },
        {
            id: 4,
            icon: '💰',
            title: 'Thu Hút FDI',
            value: 400,
            suffix: 'B USD',
            description: 'Tổng vốn FDI thu hút (1988-2020)',
            color: 'from-yellow-500 to-yellow-700',
        },
        {
            id: 5,
            icon: '🌍',
            title: 'Hội Nhập Quốc Tế',
            value: 15,
            suffix: '+ FTA',
            description: 'Hiệp định thương mại tự do đã ký',
            color: 'from-red-500 to-red-700',
        },
        {
            id: 6,
            icon: '👥',
            title: 'Xóa Đói Giảm Nghèo',
            value: 58,
            suffix: 'M người',
            description: 'Thoát nghèo từ 1986 đến nay',
            color: 'from-pink-500 to-pink-700',
        },
    ];

    return (
        <section ref={ref} className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
            {/* Animated Background */}
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -50, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        🏆 Thành Tựu
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Kết Quả <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Đổi Mới</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Từ một đất nước đói nghèo, Việt Nam đã trở thành nền kinh tế năng động trong khu vực
                    </p>
                </motion.div>

                {/* Achievement Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, rotateY: 5 }}
                            className="relative"
                        >
                            <div className={`bg-gradient-to-br ${achievement.color} rounded-2xl shadow-xl p-8 text-white h-full relative overflow-hidden`}>
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                                </div>

                                <div className="relative z-10">
                                    <motion.div
                                        className="text-5xl mb-4"
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                                    >
                                        {achievement.icon}
                                    </motion.div>

                                    <h3 className="text-xl font-bold mb-4">{achievement.title}</h3>

                                    <motion.div
                                        className="text-5xl font-bold mb-4"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ type: 'spring', stiffness: 100, delay: index * 0.1 + 0.3 }}
                                    >
                                        {isInView && (
                                            <CountUp
                                                end={achievement.value}
                                                duration={2.5}
                                                suffix={achievement.suffix}
                                                separator=","
                                            />
                                        )}
                                    </motion.div>

                                    <p className="text-sm opacity-90">{achievement.description}</p>
                                </div>

                                {/* Shine Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                                    animate={{
                                        x: ['-100%', '100%'],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                        ease: 'easeInOut',
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Quote */}
                <motion.div
                    className="mt-16 max-w-4xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-l-8 border-red-600">
                        <div className="flex items-start gap-6">
                            <motion.div
                                className="text-6xl"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                💬
                            </motion.div>
                            <div>
                                <p className="text-2xl text-gray-700 italic mb-4 leading-relaxed">
                                    "Đổi mới là con đường duy nhất để cứu đất nước khỏi nguy cơ tụt hậu.
                                    Không đổi mới thì đất nước sẽ tiếp tục đói nghèo, lạc hậu."
                                </p>
                                <p className="text-lg font-semibold text-gray-900">
                                    - Tổng Bí thư Nguyễn Văn Linh (1986)
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default KeyAchievements;
