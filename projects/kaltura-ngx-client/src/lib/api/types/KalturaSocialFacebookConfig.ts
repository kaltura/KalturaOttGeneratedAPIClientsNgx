
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSocialConfig, KalturaSocialConfigArgs } from './KalturaSocialConfig';

export interface KalturaSocialFacebookConfigArgs  extends KalturaSocialConfigArgs {
    appId? : string;
	permissions? : string;
}


export class KalturaSocialFacebookConfig extends KalturaSocialConfig {

    appId : string;
	permissions : string;

    constructor(data? : KalturaSocialFacebookConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialFacebookConfig' },
				appId : { type : 's' },
				permissions : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSocialFacebookConfig'] = KalturaSocialFacebookConfig;