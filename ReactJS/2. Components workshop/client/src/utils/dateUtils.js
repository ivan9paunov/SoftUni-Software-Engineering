export const formatDate = (dateString) => {
    const date = new Date(dateString);

    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' }
    const formattedDate = date.toLocaleDateString('en-US', dateOptions);

    return formattedDate;
}

export const detailedDate = (dateString) => {
    const date = new Date(dateString);

    const formatOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = date.toLocaleDateString('en-US', formatOptions);

    return formattedDate;
}