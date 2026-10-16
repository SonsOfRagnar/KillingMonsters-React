function SanitiseString(string : string) : string {
    let sanitisedString : string = string.toLowerCase().split(" ").join("-");
    return sanitisedString;
}

export
{
    SanitiseString as SanitiseString
}