
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaExportTaskFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
}


export class KalturaExportTaskFilter extends KalturaFilter {

    idIn : string;

    constructor(data? : KalturaExportTaskFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExportTaskFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaExportTaskFilter'] = KalturaExportTaskFilter;