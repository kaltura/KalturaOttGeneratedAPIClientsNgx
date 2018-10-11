
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPartnerConfigurationArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaPartnerConfiguration extends KalturaObjectBase {

    

    constructor(data? : KalturaPartnerConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPartnerConfiguration' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPartnerConfiguration'] = KalturaPartnerConfiguration;