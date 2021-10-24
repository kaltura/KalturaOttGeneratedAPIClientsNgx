
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterAction, KalturaFilterActionArgs } from './KalturaFilterAction';

export interface KalturaFilterFileByQualityActionArgs  extends KalturaFilterActionArgs {
    qualityIn? : string;
}


export class KalturaFilterFileByQualityAction extends KalturaFilterAction {

    qualityIn : string;

    constructor(data? : KalturaFilterFileByQualityActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByQualityAction' },
				qualityIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByQualityAction'] = KalturaFilterFileByQualityAction;