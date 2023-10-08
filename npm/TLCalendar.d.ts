import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { default as moment_2 } from 'moment';
import { PropType } from 'vue';
import { VNodeProps } from 'vue';

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare interface IClient_Calendar_Date {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
}

declare interface IClient_Calendar_Info {
    id: string;
    name: string;
    startDate: IClient_Calendar_Date;
    endDate: IClient_Calendar_Date;
    isAllDay: boolean;
    color: string;
    resource: {
        id: string;
        name: string;
    };
    reminder?: number;
    created_by: any;
    fixed: boolean;
    extra?: any;
}

declare const root: {
    install(App: any): void;
};
export default root;

export declare const TLCalendar: __VLS_WithTemplateSlots<DefineComponent<{
    eventList: {
        type: PropType<IClient_Calendar_Info[]>;
        required: true;
    };
    startDate: {
        type: PropType<string>;
    };
    endDate: {
        type: PropType<string>;
    };
    mode: {
        type: PropType<"day" | "month">;
        required: true;
    };
    month: {
        type: PropType<string>;
    };
    utcOffset: {
        type: PropType<number>;
    };
    timeZone: {
        type: PropType<string>;
        required: true;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    changeEventDate: (event: IClient_Calendar_Info, originalDateRange: {
        start: IClient_Calendar_Date;
        end: IClient_Calendar_Date;
    }, type: "resize" | "move") => void;
    blankClick: (date: moment_2.Moment, point: {
        x: number;
        y: number;
    }) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    eventList: {
        type: PropType<IClient_Calendar_Info[]>;
        required: true;
    };
    startDate: {
        type: PropType<string>;
    };
    endDate: {
        type: PropType<string>;
    };
    mode: {
        type: PropType<"day" | "month">;
        required: true;
    };
    month: {
        type: PropType<string>;
    };
    utcOffset: {
        type: PropType<number>;
    };
    timeZone: {
        type: PropType<string>;
        required: true;
    };
}>> & {
    onChangeEventDate?: (event: IClient_Calendar_Info, originalDateRange: {
        start: IClient_Calendar_Date;
        end: IClient_Calendar_Date;
    }, type: "resize" | "move") => any;
    onBlankClick?: (date: moment_2.Moment, point: {
        x: number;
        y: number;
    }) => any;
}, {}, {}>, {
    shortView?(_: {
        timeZone: string;
        selectedEvent: IClient_Calendar_Info;
        maskInfoTop: string;
        maskInfoLeft: string;
        onClose: () => void;
    }): any;
}>;

export { }
