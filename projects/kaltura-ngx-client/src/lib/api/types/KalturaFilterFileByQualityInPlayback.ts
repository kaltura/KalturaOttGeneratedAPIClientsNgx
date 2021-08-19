
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByQuality, KalturaFilterFileByQualityArgs } from './KalturaFilterFileByQuality';

export interface KalturaFilterFileByQualityInPlaybackArgs  extends KalturaFilterFileByQualityArgs {
    
}


export class KalturaFilterFileByQualityInPlayback extends KalturaFilterFileByQuality {

    

    constructor(data? : KalturaFilterFileByQualityInPlaybackArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByQualityInPlayback' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByQualityInPlayback'] = KalturaFilterFileByQualityInPlayback;