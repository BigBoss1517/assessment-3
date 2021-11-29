import Image from 'next/image'

import { ProviderButton } from "../../../ui/buttons";

import google from './google.png'

function GoogleProvider({label, ...props}) {
    return (
        <ProviderButton>
            {props.label}
            <Image
                src={google}
                layout="fixed"
                width={250}
                height={250}
            />
        </ProviderButton>
    )
}

export default GoogleProvider
