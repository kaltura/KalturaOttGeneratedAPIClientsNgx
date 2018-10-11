
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaTopicFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaTopicFilter extends KalturaFilter {

    

    constructor(data? : KalturaTopicFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTopicFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTopicFilter'] = KalturaTopicFilter;