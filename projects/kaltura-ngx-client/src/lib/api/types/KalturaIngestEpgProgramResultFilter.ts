
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaIngestEpgProgramResultFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaIngestEpgProgramResultFilter extends KalturaFilter {

    

    constructor(data? : KalturaIngestEpgProgramResultFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestEpgProgramResultFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIngestEpgProgramResultFilter'] = KalturaIngestEpgProgramResultFilter;