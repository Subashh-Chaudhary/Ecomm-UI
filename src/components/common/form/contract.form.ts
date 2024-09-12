export interface InputTextInterface {
          name: string,
          defaultVal?: string | undefined,
          control: any,
          errMsg: string | null,
          required: boolean,
          type?: string,
          rows?: number,
}


export interface InputLabelProps{
          htmlFor: string,
          children: any
}

export interface OptionType{
          label: string,
          value: string,
}

export interface SelectOptionPros{
          control:any,
          name: string,
          required?: boolean,
          errMsg?: string,
          options?: Array<OptionType>
}