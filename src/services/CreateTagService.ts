import { getCustomRepository, TransactionManager } from "typeorm"
import { TagRepositories } from "../repositories/TagRepositories"



class CreateTagService {

    async execute(name: string) {
        const tagRepository = getCustomRepository(TagRepositories);

        if(!name) {
            throw new Error("Incorret name");
        }

        const TagAlreadyExists = await tagRepository.findOne({ name });

        if(TagAlreadyExists) {
            throw new Error("Tag already exists");
        }

        const tag = tagRepository.create({ name });

        await tagRepository.save(tag);

        return tag;
    }
}

export { CreateTagService }
