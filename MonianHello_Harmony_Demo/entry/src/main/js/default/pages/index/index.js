export default {
    data: {
        title: "",
        black: "#000000",
        blue: "#66ccff",
        titleColor: ""
    },
    onInit() {
        this.title = this.$t('strings.world');
        this.titleColor = this.black
    },
    buttonOnClick(){
        this.titleColor = this.titleColor == this.black ? this.blue : this.black;
    }
}
