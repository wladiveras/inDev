export default (date: Date | string | number): string => {
    const dateObj = new Date(date)
    return dateObj.toISOString().split('T')[0]
}
