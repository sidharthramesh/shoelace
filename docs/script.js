// import Vue from 'vue'
// import axios from 'axios'

Vue.config.ignoredElements = [/mb|sl-\w*/];

var app = new Vue({
    el: "#vueapp",
    data: {
        composition: {},
        systolic: 0,
        loading: false,
        context: {
            "composer_name": "Sidharth Ramesh"
        },
        axios: axios.create({
            baseURL: 'https://cdr.code4health.org/rest/v1/',
            auth: { username: '***REMOVED***', password: '***REMOVED***' }
        }),
        uid: "610ba5e1-6637-4806-99f3-9d153e6e7c3f::***REMOVED***::1",
        ehr: "25adf3f9-e8e5-474d-a1e3-ca4c89e657e1",
        template: "bloodPressureExample",
    },
    methods: {
        async submit(e) {
            let uuid = await this.$refs["form"].postComposition(e.detail)
            this.uid = uuid
        },
        async load() {
            const data = await this.$refs["form"].getComposition()
            this.composition = data
        }
    },
})