
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByLabel, KalturaFilterFileByLabelArgs } from './KalturaFilterFileByLabel';

export interface KalturaFilterFileByLabelInPlaybackArgs  extends KalturaFilterFileByLabelArgs {
    
}


export class KalturaFilterFileByLabelInPlayback extends KalturaFilterFileByLabel {

    

    constructor(data? : KalturaFilterFileByLabelInPlaybackArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByLabelInPlayback' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByLabelInPlayback'] = KalturaFilterFileByLabelInPlayback;