export interface InputTextInterface {
          name: string,
          defaultVal?: string | undefined,
          control: any,
          errMsg: string | null,
          type?: string,
          rows?: number,
          autocomplete?: string,
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
          errMsg?: string,
          options?: Array<OptionType>
}