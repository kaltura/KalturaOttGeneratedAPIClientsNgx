
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaConfigurationsFilterArgs  extends KalturaFilterArgs {
    configurationGroupIdEqual? : string;
}


export class KalturaConfigurationsFilter extends KalturaFilter {

    configurationGroupIdEqual : string;

    constructor(data? : KalturaConfigurationsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfigurationsFilter' },
				configurationGroupIdEqual : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaConfigurationsFilter'] = KalturaConfigurationsFilter;