
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaCatalogPartnerConfigArgs  extends KalturaPartnerConfigurationArgs {
    singleMultilingualMode? : boolean;
}


export class KalturaCatalogPartnerConfig extends KalturaPartnerConfiguration {

    singleMultilingualMode : boolean;

    constructor(data? : KalturaCatalogPartnerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCatalogPartnerConfig' },
				singleMultilingualMode : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCatalogPartnerConfig'] = KalturaCatalogPartnerConfig;