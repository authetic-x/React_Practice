export default {
    formatDate: (time) => {
        if (time) {
            const date = new Date(time);
            return (date.getFullYear() + '-' + (date.getMonth()+1) + 
                    '-' + date.getDate() + '-' + date.getHours() + 
                    ':' + date.getMinutes() + ':' + date.getSeconds());
        }
    }
}