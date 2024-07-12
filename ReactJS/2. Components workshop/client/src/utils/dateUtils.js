export const formatDate = (dateString) => {
    const date = new Date(dateString);

    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' }
    const formattedDate = date.toLocaleDateString('en-US', dateOptions);

    return formattedDate;
}