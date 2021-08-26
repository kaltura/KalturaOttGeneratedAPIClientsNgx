
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterAction, KalturaFilterActionArgs } from './KalturaFilterAction';

export interface KalturaFilterFileByLabelActionArgs  extends KalturaFilterActionArgs {
    labelIn? : string;
}


export class KalturaFilterFileByLabelAction extends KalturaFilterAction {

    labelIn : string;

    constructor(data? : KalturaFilterFileByLabelActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByLabelAction' },
				labelIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByLabelAction'] = KalturaFilterFileByLabelAction;