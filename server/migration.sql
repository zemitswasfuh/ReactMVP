DROP TABLE IF EXISTS vehicles;
DROP TABLE IF EXISTS orders;

CREATE TABLE vehicles (
  id SERIAL,
  make TEXT,
  model VARCHAR,
  imageSrc VARCHAR
);

CREATE TABLE orders (
  id SERIAL,
  name TEXT,
  make TEXT,
  model VARCHAR
);

INSERT INTO vehicles(make, model, imageSrc) VALUES('Clown', 'Car', 'https://www.squishable.com/mm5/graphics/00000001/5/GoClownCar-600px.jpg');
INSERT INTO vehicles(make, model, imageSrc) VALUES('Monster', 'Truck', 'https://cdn.forumcomm.com/dims4/default/beece1c/2147483647/strip/true/resize/840x560!/format/webp/quality/90/?url=https%3A%2F%2Fforum-communications-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F4c%2F75%2Fed10921342a7a077b806a9f9e812%2Fboss-gator.jpg');
INSERT INTO vehicles(make, model, imageSrc) VALUES('Bat', 'Mobile', 'https://hagerty-media-prod.imgix.net/2021/12/1977-Lincoln-Batmobile-Replica-9.jpeg?auto=format%2Ccompress&ixlib=php-3.3.0');
INSERT INTO vehicles(make, model, imageSrc) VALUES('Christine', '', 'https://www.brightwalldarkroom.com/wp-content/uploads/2022/09/christinefinal-resized-1.jpeg');
INSERT INTO vehicles(make, model, imageSrc) VALUES('The', 'Homer', 'https://onscreencars.com/content/uploads/2010/01/the-homer.jpg');
INSERT INTO vehicles(make, model, imageSrc) VALUES('Mutt', 'Cutts', 'http://familydealblog.com/wp-content/uploads/2014/10/3-Mutts-Cutts-Dog-Van-Clever-Costume-Ideas-For-Your-Car-300x156.jpg');
INSERT INTO vehicles(make, model, imageSrc) VALUES('General', 'Lee', 'https://barrettjacksoncdn.azureedge.net/staging/carlist/items/Fullsize/Cars/60838/60838_Front_3-4_Web.jpg');
