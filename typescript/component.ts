import { Action, Image } from "./action";
import { Post } from "./pages";

type AdditionalParam = {
  title: string;
  title_h2: string;
  title_h3: string;
  description: string;
  banner_title: string;
  banner_description: string;
  designation: string;
  name: string;
  html_code: string;
  body: string;
  date: string;
};

type Employee = {
  image: Image;
  name: string;
  designation: string;
  $: AdditionalParam;
};

type BucketList = [
  BucketArray: {
    title_h3: string;
    description: string;
    url: string;
    call_to_action: Action;
    icon: Image;
    $: AdditionalParam;
  }
];

type Card = [
  cardArray: {
    title_h3: string;
    description: string;
    call_to_action: Action;
    $: AdditionalParam;
  }
];

type Article = {
  href: string;
  title: string;
  $: AdditionalParam;
};

type FeaturedBlog = [
  BlogArray: {
    title: string;
    featured_image: Image;
    body: string;
    url: string;
    $: AdditionalParam;
  }
];

type Widget = {
  title_h2: string;
  type?: string;
  $: AdditionalParam;
};

type Event = {
  special_event_title: string;
  description: string;
  date_of_event: string;
  location: string;
  image: Image;
  heroes: Heroe[];
  blogs: Post[];
  url: string;
};

type Heroe = {
  title: string;
}

export type Component = {
  hero_banner: Banner;
  section?: SectionProps;
  section_with_buckets?: SectionWithBucket;
  from_blog?: FeaturedBlogData;
  section_with_cards?: Cards;
  section_with_html_code?: AdditionalParamProps;
  our_team?: TeamProps;
  widget?: Widget;
  special_events_list?: SpecialEventsSectionProps;
};

export type SpecialEventsSectionProps = {
  title: string;
  description: string;
  special_events: Event[];
};

export type SectionWithBucket = {
  bucket_tabular: boolean;
  title_h2: string;
  buckets: BucketList;
  description: string;
  $: AdditionalParam;
};

export type Cards = {
  cards: Card;
};

export type Banner = {
  banner_title: string;
  banner_description: string;
  bg_color: string;
  call_to_action: Action;
  banner_image: Image;
  text_color: string;
  $: AdditionalParam;
};

export type AdditionalParamProps = {
  html_code_alignment: string;
  title: string;
  $: AdditionalParam;
  description: string;
  html_code: string;
};

export type SectionProps = {
  title_h2: String;
  description: string;
  call_to_action: Action;
  image: Image;
  image_alignment: string;
  $: AdditionalParam;
};

export type TeamProps = {
  title_h2: string;
  description: string;
  $: AdditionalParam;
  employees: [Employee];
};

export type FeaturedBlogData = {
  title_h2: string;
  view_articles: Article;
  featured_blogs: FeaturedBlog;
  $: AdditionalParam;
};

export type RenderProps = {
  blogPost?: boolean;
  contentTypeUid: string;
  entryUid: string;
  locale: string;
  pageComponents: Component[];
};
