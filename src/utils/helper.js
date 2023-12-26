const returnal = (message = '', success = false, content = {}) => {
    return {
        'success': success,
        'message': message,
        'content': content
    }
}

const cleanDocument = (document) => {
    return document.replace(/\D/g, '');
  }

module.exports = {
    returnal,
    cleanDocument
}