module.exports = {
    generateID: function(chars) {
        let result = '';
        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let charactersLength = characters.length;

        for (let i = 0; i < chars; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        };

        return result;
    },

    generateEmail: function() {
        let values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let email = '', temp = '';
        for (let i = 0; i < 10; i++) {
            temp = values.charAt(Math.round(values.length * Math.random()));
            email += temp;
        };
        temp = '';
        email += '@';
        for (let i = 0; i < 8; i++) {
            temp = values.charAt(Math.round(values.length * Math.random()));
            email += temp;
        };
        email += '.com';
        return email;
    },

    generateNumbers: function() {
        let numbers = Math.floor(Math.random() * 9000000000) + 1000000000;
        return numbers.toString();
    },
};