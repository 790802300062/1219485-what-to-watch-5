import {getRandomInteger} from "../utils/common";

const RATINGS_RANGE = {
  MIN: 1,
  MAX: 300
};

export default [
  {
    id: 1,
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014,
    rate: 8.9,
    duration: `2h 50m`,
    ratings: getRandomInteger(RATINGS_RANGE.MIN, RATINGS_RANGE.MAX),
    description: `In the 1930s, the Grand Budapest Hotel is a
      popular European ski resort, presided over by concierge
      Gustave H. (Ralph Fiennes). Zero, a junior lobby boy,
      becomes Gustave's friend and protege. Gustave prides himself
      on providing first-class service to the hotel's guests,
      including satisfying the sexual needs of the many elderly
      women who stay there. When one of Gustave's lovers dies
      mysteriously, Gustave finds himself the recipient of a
      priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    poster: {
      src: `https://pyxis.nymag.com/v1/imgs/bda/929/1f13ce11f1ffcfae457130f5b2bd93e225-09-grand-budapest.rsquare.w700.jpg`
    },
    bacground: {
      src: `../../public/img/bg-the-grand-budapest-hotel.jpg`
    },
    video: {
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    }
  },
  {
    id: 2,
    title: `Bohemian Rhapsody`,
    genre: `Drama, biography`,
    year: 2018,
    rate: 9.6,
    duration: `2h 10m`,
    ratings: getRandomInteger(RATINGS_RANGE.MIN, RATINGS_RANGE.MAX),
    description: `Bohemian Rhapsody is a movie based
      on the true story of Queen's journey from the start
      of the rock band to their now-legendary 1985 performance
      at the Live Aid concert in Wembley Stadium.`,
    director: `Bryan Singer`,
    starring: `Rami Malek, Lucy Boynton, Gwilym Lee, Ben Hardy,
      Joe Mazzello, Aidan Gillen, Allen Leech, Tom Hollander,
      Mike Myers`,
    poster: {
      src: `https://upload.wikimedia.org/wikipedia/ru/c/cd/Bohemian_Rhapsody_The_Original_Soundtrack.jpg`
    },
    video: {
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    }
  },
  {
    id: 3,
    title: `Fantastic Beasts: The Crimes Of Grindelwald`,
    genre: `Fantasy`,
    year: 2018,
    rate: 6.6,
    duration: `1h 35m`,
    ratings: getRandomInteger(RATINGS_RANGE.MIN, RATINGS_RANGE.MAX),
    description: `Fantastic Beasts: The Crimes of Grindelwald is
      a 2018 fantasy film directed by David Yates and written
      by J. K. Rowling. A joint American and British production,
      it is the sequel to Fantastic Beasts and Where to Find Them
      (2016). It is the second installment in the Fantastic Beasts
      film series and the tenth overall in the Wizarding World
      franchise, which began with the Harry Potter film series.`,
    director: `David Yates`,
    starring: `Eddie Redmayne, Katherine Waterston, Dan Fogler,
      Alison Sudol, Ezra Miller, Zoë Kravitz, Callum Turner,
      Claudia Kim, William Nadylam, Kevin Guthrie, Jude Law,
      Johnny Depp`,
    poster: {
      src: `https://d2eib6r9tuf5y8.cloudfront.net/l/assets/img/article/article-2491-kqk17iex/keyvisual.jpg`
    },
    video: {
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    }
  },
  {
    id: 4,
    title: `Johnny English`,
    genre: `Comedy`,
    year: 2003,
    rate: 6.7,
    duration: `1h 39m`,
    ratings: getRandomInteger(RATINGS_RANGE.MIN, RATINGS_RANGE.MAX),
    description: `Johnny English is a kindhearted and
      well-intentioned but clumsy MI7 employee, working a desk
      job while dreaming of being their most trusted agent. After
      Agent One dies in a submarine accident unknowingly caused by
      English, the remaining agents are killed by a bombing at
      Agent One's funeral, again due to English's incompetence,
      leaving English as the lone surviving agent capable of
      finishing Agent One’s mission.`,
    director: `Peter Howitt`,
    starring: `Rowan Atkinson, Natalie Imbruglia, Ben Miller, John Malkovich`,
    poster: {
      src: `https://cdn.onebauer.media/one/empire-tmdb/films/58233/images/5QJbfO5EZtNHTABWKkGqOyvOvNg.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg`
    },
    video: {
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    }
  },
  {
    id: 5,
    title: `Macbeth`,
    genre: `Historical, Drama`,
    year: 2015,
    rate: 7.1,
    duration: `2h 25m`,
    ratings: getRandomInteger(RATINGS_RANGE.MIN, RATINGS_RANGE.MAX),
    description: `Macbeth is a 2015 British-French epic
      historical drama film directed by Justin Kurzel and
      written for the screen by Jacob Koskoff, Todd Louiso,
      and Michael Lesslie. The screenplay is based on William
      Shakespeare's play Macbeth.[6] The film stars Michael
      Fassbender in the title role and Marion Cotillard as Lady
      Macbeth, with Paddy Considine, Sean Harris, Jack Reynor,
      Elizabeth Debicki, and David Thewlis in supporting roles.
      The story follows a Scottish general's rise to power after
      receiving a prophecy from a trio of witches that one day he
      will become King of Scotland. Like the play it was adapted
      from, the film dramatises the damaging physical and
      psychological effects of political ambition on those who
      seek power for its own sake.`,
    director: `Justin Kurzel`,
    starring: `Michael Fassbende, Marion Cotillar, Paddy Considin,
      Sean Harri, Jack Reyno, Elizabeth Debick, David Thewlis`,
    poster: {
      src: `https://pensivepenhome.files.wordpress.com/2019/09/macbeth-216.jpg`
    },
    video: {
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    }
  },
  {
    id: 6,
    title: `Midnight Special`,
    genre: `Science Fiction`,
    year: 2016,
    rate: 6.6,
    duration: `1h 55m`,
    ratings: getRandomInteger(RATINGS_RANGE.MIN, RATINGS_RANGE.MAX),
    description: `In a motel, Roy Tomlin and his friend Lucas
      watch an AMBER Alert for 8-year-old Alton Meyer and his
      reported abductor, Roy, while the boy reads on the floor.
      At the Ranch, a religious cult in rural Texas, Pastor Calvin
      Meyer dispatches two of his parishioners to retrieve Alton.
      He then faces his congregation as the FBI storms their church.
      NSA communications analyst Paul Sevier asks Calvin how numbers
      sent via encoded satellite transmissions made their way into
      his sermons. Calvin explains that Alton speaks in tongues and
      gave the numbers to Calvin. As Alton's powers grew, his
      mother Sarah abandoned him, and members of the Ranch have
      been raising him, with Pastor Meyer as his adoptive father.
      It is also noted in this sequence that Roy is Alton's
      biological father.`,
    director: `Jeff Nichols`,
    starring: `Michael Shannon, Joel Edgerton, Kirsten Dunst,
      Adam Driver, Jaeden Martell, Sam Shepard`,
    poster: {
      src: `https://www.gannett-cdn.com/-mm-/1e53998f7253ccb1c98612ab8e98d05848765e0a/c=682-0-3415-1544/local/-/media/2016/03/12/USATODAY/USATODAY/635933823630083684-MS-FP-048.jpg`
    },
    video: {
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    }
  },
  {
    id: 7,
    title: `Mindhunter`,
    genre: `Psychological, Crime, Thriller`,
    year: 2017,
    rate: 7.5,
    duration: `1h 29m`,
    ratings: getRandomInteger(RATINGS_RANGE.MIN, RATINGS_RANGE.MAX),
    description: `Mindhunter revolves around FBI agents Holden
      Ford (Jonathan Groff) and Bill Tench (Holt McCallany), along
      with psychologist Wendy Carr (Anna Torv), who operate the
      FBI's Behavioral Science Unit within the Training Division at
      the FBI Academy in Quantico, Virginia. They interview
      imprisoned serial killers to understand how they think, with
      the hope of applying this knowledge to solve ongoing cases.
      Season one is set in 1977 to 1980, in the early days of
      criminal psychology and criminal profiling at the Federal
      Bureau of Investigation. Notorious serial killer Edmund
      Kemper (Cameron Britton) has a recurring role in this season
      as he assists Ford and Tench in understanding how a serial
      killer's mind works. Season two is set in 1980 through 1981
      and covers the Atlanta murders of 1979–81.[8] This is based
      on the real case of Wayne Williams who was charged for the
      murder of two adult men but was never found guilty of killing
      at least 28 children and adolescents.`,
    director: `Joe Penhall`,
    starring: `Jonathan Groff, Holt McCallany, Hannah Gross,
      Cotter Smith, Anna Torv, Stacey Roca, Cameron Britton,
      Michael Cerveris`,
    poster: {
      src: `https://static.fanpage.it/wp-content/uploads/sites/16/2020/01/mindhunter-1200x900.jpg`
    },
    video: {
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    }
  },
  {
    id: 8,
    title: `Pulp Fiction`,
    genre: `Comedy`,
    year: 1994,
    rate: 8.9,
    duration: `2h 21m`,
    ratings: getRandomInteger(RATINGS_RANGE.MIN, RATINGS_RANGE.MAX),
    description: `Pulp Fiction's narrative is told out of
      chronological order, and follows three main interrelated
      stories: Mob contract killer Vincent Vega is the protagonist
      of the first story, prizefighter Butch Coolidge is the
      protagonist of the second, and Vincent's partner Jules
      Winnfield is the protagonist of the third.`,
    director: `Quentin Tarantino`,
    starring: `John Travolta, Samuel L. Jackson, Uma Thurman,
      Harvey Keitel, Tim Roth, Amanda Plummer, Maria de Medeiros,
      Ving Rhames, Eric Stoltz, Rosanna Arquette, Christopher
      Walken, Bruce Willis`,
    poster: {
      src: `https://www.indiewire.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-22-at-5.09.08-PM.png`
    },
    video: {
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    }
  }];
