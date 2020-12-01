
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDataEncryption } from './KalturaDataEncryption';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaSecurityPartnerConfigArgs  extends KalturaPartnerConfigurationArgs {
    encryption? : KalturaDataEncryption;
}


export class KalturaSecurityPartnerConfig extends KalturaPartnerConfiguration {

    encryption : KalturaDataEncryption;

    constructor(data? : KalturaSecurityPartnerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSecurityPartnerConfig' },
				encryption : { type : 'o', subTypeConstructor : KalturaDataEncryption, subType : 'KalturaDataEncryption' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSecurityPartnerConfig'] = KalturaSecurityPartnerConfig;