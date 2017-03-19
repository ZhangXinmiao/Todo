/**
 * @param {array} tips 包含content和completed两个属性的对象数组 
 * 
 * @interface InitState
 */
interface InitState {
    tips: {content: string, completed: boolean}[]
}