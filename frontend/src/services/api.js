import axios from 'axios'

// Create Axios instance with base URL
const api = axios.create({
    baseURL: import.meta.env?.VITE_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json'
    }
})

// Add request interceptor to attach token
api.interceptors.request.use((config) => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
})

// --- Mock Data Services (until backend is ready) ---

// Auth Service
export const authAPI = {
    login: async (credentials) => {
        // Mock login
        await new Promise(resolve => setTimeout(resolve, 1000))
        if (credentials.email === 'test@example.com' && credentials.password === 'password') {
            return {
                data: {
                    token: 'mock-jwt-token',
                    user: {
                        id: '1',
                        fullName: 'Alex Developer',
                        email: 'test@example.com',
                        targetRole: 'Machine Learning Engineer',
                        experienceLevel: 'mid'
                    }
                }
            }
        }
        throw new Error('Invalid credentials')
    },

    signup: async (data) => {
        // Mock signup
        await new Promise(resolve => setTimeout(resolve, 1000))
        return {
            data: {
                token: 'mock-jwt-token',
                user: {
                    id: '2',
                    ...data
                }
            }
        }
    },

    updateProfile: async (data) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        return { data: { success: true } }
    }
}

// Job Market Service
export const jobMarketAPI = {
    getTrendingRoles: async () => {
        await new Promise(resolve => setTimeout(resolve, 800))
        return {
            data: [
                { id: 1, title: 'Machine Learning Engineer', demand: 92, growth: '+15%' },
                { id: 2, title: 'AI Ethics Specialist', demand: 88, growth: '+25%' },
                { id: 3, title: 'Data Engineer', demand: 85, growth: '+10%' },
                { id: 4, title: 'Full Stack Developer', demand: 82, growth: '+5%' },
                { id: 5, title: 'Cloud Architect', demand: 80, growth: '+8%' }
            ]
        }
    },

    getTrendingSkills: async () => {
        await new Promise(resolve => setTimeout(resolve, 800))
        return {
            data: [
                { skill: 'Python', count: 15420, percentage: 95, trend: 'stable' },
                { skill: 'TensorFlow', count: 12300, percentage: 80, trend: 'rising' },
                { skill: 'React', count: 11000, percentage: 75, trend: 'stable' },
                { skill: 'AWS', count: 10500, percentage: 72, trend: 'rising' },
                { skill: 'Docker', count: 9800, percentage: 68, trend: 'stable' }
            ]
        }
    },

    getMarketSnapshot: async () => {
        await new Promise(resolve => setTimeout(resolve, 600))
        return {
            data: {
                totalJobs: 45200,
                totalRoles: 120,
                totalSkills: 320,
                lastUpdated: new Date().toISOString(),
                emergingSkills: ['LangChain', 'Vector DB', 'RAG', 'Prompt Engineering'],
                decliningSkills: ['jQuery', 'Flash', 'Perl', 'Objective-C']
            }
        }
    }
}

// ML Analysis Service
export const mlAPI = {
    analyzeSkillGap: async (targetRole, resumeUrl) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        return {
            data: {
                targetRole,
                gapPercentage: 35,
                roleFitScore: 65,
                marketDemandScore: 88,
                trendDirection: 'rising',
                missingSkills: [
                    { skill: 'TensorFlow', importance: 0.85, priority: 1 },
                    { skill: 'Kubernetes', importance: 0.70, priority: 2 },
                    { skill: 'CI/CD', importance: 0.60, priority: 3 }
                ],
                matchedSkills: [
                    { skill: 'Python', proficiency: 4 },
                    { skill: 'Git', proficiency: 5 },
                    { skill: 'SQL', proficiency: 3 }
                ],
                partialSkills: [
                    { skill: 'Docker', userLevel: 2, requiredLevel: 4 }
                ],
                recommendations: {
                    learningPath: [
                        'Complete "Deep Learning Specialization" on Coursera',
                        'Build a project using Kubernetes directly',
                        'Set up a GitHub Actions pipeline for your ML model'
                    ],
                    resources: [
                        { title: 'TensorFlow Documentation', url: 'https://www.tensorflow.org/' },
                        { title: 'Kubernetes Basics', url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/' }
                    ]
                }
            }
        }
    },

    getLatestAnalysis: async () => {
        // Return mock analysis or null
        await new Promise(resolve => setTimeout(resolve, 500))
        return {
            data: {
                gapPercentage: 35,
                roleFitScore: 65,
                lastAnalyzed: new Date().toISOString()
            }
        }
    }
}

// Report Service
export const reportAPI = {
    getReports: async () => {
        await new Promise(resolve => setTimeout(resolve, 800))
        return {
            data: [
                {
                    id: 'rep-101',
                    filename: 'skill_gap_report_2023-10-01.pdf',
                    generatedAt: '2023-10-01T10:00:00Z',
                    status: 'completed',
                    emailSent: true,
                    emailSentAt: '2023-10-01T10:05:00Z'
                },
                {
                    id: 'rep-102',
                    filename: 'skill_gap_report_2023-11-01.pdf',
                    generatedAt: '2023-11-01T10:00:00Z',
                    status: 'completed',
                    emailSent: false
                }
            ]
        }
    },

    requestReport: async () => {
        await new Promise(resolve => setTimeout(resolve, 1500))
        return { data: { success: true, message: 'Report generation queued' } }
    },

    downloadReport: async (reportId) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        // Return a dummy PDF blob
        return { data: new Blob(['PDF Content'], { type: 'application/pdf' }) }
    }
}

// Storage Service
export const storageAPI = {
    uploadResume: async (file) => {
        await new Promise(resolve => setTimeout(resolve, 1500))
        return {
            data: {
                url: `https://storage.example.com/resumes/${file.name}`,
                filename: file.name
            }
        }
    }
}

export default api
