// const utils = {
//   buildColumnInfo(s: any, name: string): any {},
// }
// declare let appState: { dataSchema: unknown }
// function getColumnInfo(name: string): any {
//   return utils.buildColumnInfo(appState.dataSchema, name) // any를 반환
// }
const utils = {
    buildColumnInfo(s, name) { return {}; },
};
function getColumnInfo(name) {
    return utils.buildColumnInfo(appState.dataSchema, name); // CoumnInfo를 반환
}
const columnInfo = getColumnInfo('name'); // any를 반환.
export default {};
