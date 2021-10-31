
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaCustomFieldsPartnerConfigurationArgs  extends KalturaPartnerConfigurationArgs {
    metaSystemNameInsteadOfAliasList? : string;
}


export class KalturaCustomFieldsPartnerConfiguration extends KalturaPartnerConfiguration {

    metaSystemNameInsteadOfAliasList : string;

    constructor(data? : KalturaCustomFieldsPartnerConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCustomFieldsPartnerConfiguration' },
				metaSystemNameInsteadOfAliasList : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCustomFieldsPartnerConfiguration'] = KalturaCustomFieldsPartnerConfiguration;