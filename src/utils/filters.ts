import { App } from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
export default function filters(app: App): void {
    app.config.globalProperties.$filters = {
        FormDate(time: string, format = 'YYYY-MM-DD') {
            return dayjs.utc(time).format(format)
        },
    }
}
