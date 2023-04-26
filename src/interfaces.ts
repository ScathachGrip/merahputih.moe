export interface ICnames {
    active: {
        [key: string]: string;
    }
};

export interface IRestricted {
    list: RegExp[];
}