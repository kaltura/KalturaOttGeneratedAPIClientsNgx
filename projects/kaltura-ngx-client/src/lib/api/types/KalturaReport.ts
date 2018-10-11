
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaReport extends KalturaObjectBase {

    

    constructor(data? : KalturaReportArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReport' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReport'] = KalturaReport;