// const utils = {
//   buildColumnInfo(s: any, name: string): any {},
// }
// declare let appState: { dataSchema: unknown }
// function getColumnInfo(name: string): any {
//   return utils.buildColumnInfo(appState.dataSchema, name) // any를 반환
// }

interface ColumnInfo {}
interface Utils {
  buildColumnInfo(s: any, name: string): ColumnInfo
}

const utils: Utils = {
  buildColumnInfo(s, name) { return {} },
}
declare let appState: { dataSchema: unknown }
function getColumnInfo(name: string): any {
  return utils.buildColumnInfo(appState.dataSchema, name) // CoumnInfo를 반환
}
const columnInfo = getColumnInfo('name'); // any를 반환.


export default {}