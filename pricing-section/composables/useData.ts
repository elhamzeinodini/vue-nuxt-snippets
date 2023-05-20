import courseData from "./courseData"

export const useData = () => {
    return {
        ...courseData,
        plans : courseData.plans.map((plan) => ({
            ...plan,
        }))
    }
}