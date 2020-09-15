
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAnnouncementFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaAnnouncementFilter extends KalturaFilter {

    

    constructor(data? : KalturaAnnouncementFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAnnouncementFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAnnouncementFilter'] = KalturaAnnouncementFilter;