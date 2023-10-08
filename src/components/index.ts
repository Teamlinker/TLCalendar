import TLCalendar from "./calendar/calendar.vue"

export { TLCalendar };

const  root= {
    install(App:any) {
        App.component("TLCalendar", TLCalendar);
    },
};

export default root;