"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Clock, User, ArrowRight, Filter } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Features Every School ERP Should Have",
    excerpt:
      "Discover the must-have features that make a school ERP system truly effective for modern educational institutions.",
    category: "ERP Best Practices",
    author: "Dr. Sarah Chen",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["ERP", "School Management", "Features"],
  },
  {
    id: 2,
    title: "The Future of Educational Technology: AI and Machine Learning",
    excerpt: "Explore how artificial intelligence and machine learning are transforming the educational landscape.",
    category: "Education Tech Trends",
    author: "Michael Rodriguez",
    readTime: "12 min read",
    publishDate: "2024-01-10",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["AI", "Machine Learning", "EdTech"],
  },
  {
    id: 3,
    title: "Getting Started with OceanZen: A Complete Setup Guide",
    excerpt: "Step-by-step tutorial on setting up your OceanZen ERP system for maximum efficiency.",
    category: "OceanZen Tutorials",
    author: "Lisa Thompson",
    readTime: "15 min read",
    publishDate: "2024-01-08",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Tutorial", "Setup", "Getting Started"],
  },
  {
    id: 4,
    title: "New Feature Release: Advanced Analytics Dashboard",
    excerpt: "Introducing our new analytics dashboard with AI-powered insights and customizable reports.",
    category: "Product Updates",
    author: "James Wilson",
    readTime: "5 min read",
    publishDate: "2024-01-05",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Product Update", "Analytics", "Dashboard"],
  },
  {
    id: 5,
    title: "Best Practices for Student Data Management",
    excerpt:
      "Learn how to effectively manage and protect student data while ensuring compliance with privacy regulations.",
    category: "ERP Best Practices",
    author: "Dr. Priya Sharma",
    readTime: "10 min read",
    publishDate: "2024-01-03",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Data Management", "Privacy", "Compliance"],
  },
  {
    id: 6,
    title: "Digital Transformation in Higher Education",
    excerpt: "How universities are leveraging technology to improve student outcomes and operational efficiency.",
    category: "Education Tech Trends",
    author: "David Kim",
    readTime: "9 min read",
    publishDate: "2024-01-01",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Digital Transformation", "Higher Education", "Technology"],
  },
]

const categories = ["All", "ERP Best Practices", "Education Tech Trends", "OceanZen Tutorials", "Product Updates"]

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.publishDate).toLocaleDateString()}
                    </span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights, tutorials, and product updates from
                OceanZen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email address" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Join 5,000+ education professionals who trust our insights.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
