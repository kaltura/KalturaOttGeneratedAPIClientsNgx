
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEvictionPolicyType } from './KalturaEvictionPolicyType';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaConcurrencyPartnerConfigArgs  extends KalturaPartnerConfigurationArgs {
    deviceFamilyIds? : string;
	evictionPolicy? : KalturaEvictionPolicyType;
}


export class KalturaConcurrencyPartnerConfig extends KalturaPartnerConfiguration {

    deviceFamilyIds : string;
	evictionPolicy : KalturaEvictionPolicyType;

    constructor(data? : KalturaConcurrencyPartnerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConcurrencyPartnerConfig' },
				deviceFamilyIds : { type : 's' },
				evictionPolicy : { type : 'es', subTypeConstructor : KalturaEvictionPolicyType, subType : 'KalturaEvictionPolicyType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaConcurrencyPartnerConfig'] = KalturaConcurrencyPartnerConfig;