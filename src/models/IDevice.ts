export interface IDevice {
    id: number
    image: string;
    name: string;
    price: number;
}

export interface IDevices {
    items: IDevice[]
    }