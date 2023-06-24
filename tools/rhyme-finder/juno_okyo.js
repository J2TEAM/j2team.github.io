new Vue({
    el: '#app',
    data() {
        return {
            inputValue: '',
            outputItems: [],
            showOutput: false,
        };
    },
    methods: {
        handleSubmit() {
            if (/(.+)?\[(.)\](.+)?/.test(this.inputValue)) {
                this.outputItems = [];
                const g = 'B C Ch D Đ G Gh Gi H K Kh L M N Ng Nh Ngh P Ph Qu R S T Th Tr V X'.split(' ');
                g.forEach((d) => {
                    const c = d + this.inputValue;
                    const item = {
                        item1: c.replace('[', '').replace(']', ''),
                        item2: c.replace(/\[a\]/i, 'á').replace(/\[â\]/i, 'ấ').replace(/\[ă\]/i, 'ắ').replace(/\[e\]/i, 'é').replace(/\[ê\]/i, 'ế').replace(/\[y\]/i, 'ý').replace(/\[u\]/i, 'ú').replace(/\[ư\]/i, 'ứ').replace(/\[i\]/i, 'í').replace(/\[o\]/i, 'ó').replace(/\[ô\]/i, 'ố').replace(/\[ơ\]/i, 'ớ'),
                        item3: c.replace(/\[a\]/i, 'à').replace(/\[â\]/i, 'ầ').replace(/\[ă\]/i, 'ằ').replace(/\[e\]/i, 'è').replace(/\[ê\]/i, 'ề').replace(/\[y\]/i, 'ỳ').replace(/\[u\]/i, 'ù').replace(/\[ư\]/i, 'ừ').replace(/\[i\]/i, 'ì').replace(/\[o\]/i, 'ò').replace(/\[ô\]/i, 'ồ').replace(/\[ơ\]/i, 'ờ'),
                        item4: c.replace(/\[a\]/i, 'ả').replace(/\[â\]/i, 'ẩ').replace(/\[ă\]/i, 'ẳ').replace(/\[e\]/i, 'ẻ').replace(/\[ê\]/i, 'ể').replace(/\[y\]/i, 'ỷ').replace(/\[u\]/i, 'ủ').replace(/\[ư\]/i, 'ử').replace(/\[i\]/i, 'ỉ').replace(/\[o\]/i, 'ỏ').replace(/\[ô\]/i, 'ổ').replace(/\[ơ\]/i, 'ở'),
                        item5: c.replace(/\[a\]/i, 'ã').replace(/\[â\]/i, 'ẫ').replace(/\[ă\]/i, 'ẵ').replace(/\[e\]/i, 'ẽ').replace(/\[ê\]/i, 'ễ').replace(/\[y\]/i, 'ỹ').replace(/\[u\]/i, 'ũ').replace(/\[ư\]/i, 'ữ').replace(/\[i\]/i, 'ĩ').replace(/\[o\]/i, 'õ').replace(/\[ô\]/i, 'ỗ').replace(/\[ơ\]/i, 'ỡ'),
                        item6: c.replace(/\[a\]/i, 'ạ').replace(/\[â\]/i, 'ậ').replace(/\[ă\]/i, 'ặ').replace(/\[e\]/i, 'ẹ').replace(/\[ê\]/i, 'ệ').replace(/\[y\]/i, 'ỵ').replace(/\[u\]/i, 'ụ').replace(/\[ư\]/i, 'ự').replace(/\[i\]/i, 'ị').replace(/\[o\]/i, 'ọ').replace(/\[ô\]/i, 'ộ').replace(/\[ơ\]/i, 'ợ'),
                    };
                    this.outputItems.push(item);
                });
                this.showOutput = true;
            }
        },
    },
});
