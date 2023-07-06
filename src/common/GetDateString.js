export const getDateString = (date) =>
{
    const day = date.getDate() >= 10 ? date.getDate().toString() : "0" + date.getDate().toString();
    const month = (date.getMonth()+1) >= 10 ? (date.getMonth()+1).toString() : "0" + (date.getMonth()+1).toString();
    const year = date.getFullYear()%100 >= 10 ? date.getFullYear()%100 : "0" + date.getFullYear()%100;
    return day+"."+month+"."+year;
    
}