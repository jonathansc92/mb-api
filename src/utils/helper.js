const returnal = (message = '', success = false, content = {}) => {
    return {
        'success': success,
        'message': message,
        'content': content
    }
}

module.exports = {
    returnal
}