
import { justifyContent, align } from "./types";

interface IRow {
    justifyContent?: justifyContent;
    alignSelf?: align;
    alignItems?: align;
}

export default function Row(props: IRow) {
    const {justifyContent, alignItems, alignSelf, ...rest} = props
    return <div 
         style={
            {
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: justifyContent ?? "flex-start",
                alignSelf: alignSelf ?? "flex-start",
                alignItems: alignItems ?? "flex-start",
                ...rest
            }
        }
    />
}
