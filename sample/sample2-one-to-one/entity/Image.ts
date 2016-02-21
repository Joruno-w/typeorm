import {PrimaryColumn, Column} from "../../../src/decorator/Columns";
import {Table} from "../../../src/decorator/Tables";
import {ManyToOne, OneToMany, OneToOne} from "../../../src/decorator/Relations";
import {Post} from "./Post";

@Table("sample2_image")
export class Image {

    @PrimaryColumn("int", { isAutoIncrement: true })
    id: number;

    @Column()
    name: string;
    
    @ManyToOne<Post>(() => Post, post => post.images, {
        //isAlwaysLeftJoin: true
    })
    post: Post;
    
    @ManyToOne<Post>(() => Post, post => post.secondaryImages, {
        // isAlwaysLeftJoin: true
    })
    secondaryPost: Post;

    /*

    @OneToOne<ImageDetails>(true, () => ImageDetails, details => details.image, {
        isAlwaysInnerJoin: true
    })
    details: ImageDetails;*/

}