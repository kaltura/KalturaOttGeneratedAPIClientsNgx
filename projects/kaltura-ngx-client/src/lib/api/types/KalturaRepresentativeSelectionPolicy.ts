
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRepresentativeSelectionPolicyArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaRepresentativeSelectionPolicy extends KalturaObjectBase {

    

    constructor(data? : KalturaRepresentativeSelectionPolicyArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRepresentativeSelectionPolicy' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRepresentativeSelectionPolicy'] = KalturaRepresentativeSelectionPolicy;