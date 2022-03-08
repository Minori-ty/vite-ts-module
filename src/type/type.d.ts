declare namespace Data {
    type Data = {
        data: [
            {
                id: string
                number: number
                type: number
                regin: string
                Date: string
                days: string
                status: string
                weather: string
                icon: string
            }
        ]
    }
}

declare namespace TableType {
    type Data = {
        id?: number
        number?: number
        type?: string
        regin?: string
        createDate?: string
        days?: string
        status?: string
        weather?: string
        icon?: string
        warnDate?: string
        subject?: string
        resolveDate?: string
        isResolve?: string
        operation?: string
        checkbox?: string
        editor?: string
        institution?: string
        phoneNumber?: string
        username?: string
        email?: string
    }[]

    type prop =
        | 'id'
        | 'number'
        | 'type'
        | 'regin'
        | 'createDate'
        | 'days'
        | 'status'
        | 'weather'
        | 'icon'
        | 'warnDate'
        | 'subject'
        | 'resolveDate'
        | 'isResolve'
        | 'operation'
        | 'checkbox'
        | 'username'
        | 'institution'
        | 'phoneNumber'
        | 'email'
        | 'editor'
        | 'institution'

    type Title = {
        prop: prop
        label: string
        slotName: string
    }[]
}
