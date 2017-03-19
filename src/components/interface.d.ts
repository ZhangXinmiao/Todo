/**
 * @param {string} content tip内容
 * @param {boolean} completed tip是否已完成
 * @param {number} _id tip编号
 * @function {function} changeState todo list 状态变化
 * @interface TipProps
 */
interface TipProps {
    content: string,
    completed: boolean,
    _id: number,
    changeState(index: number): void
}