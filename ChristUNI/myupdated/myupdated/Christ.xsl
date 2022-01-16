<?xml version="1.0" encoding="ISO-8859-1" ?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
<xsl:template match="/">
<HTML>
<HEAD> <TITLE>Christ</TITLE>
</HEAD>
<BODY style="background-color:black;color:white">
<xsl:apply-templates/>

</BODY>
</HTML>


</xsl:template>
<xsl:template match="Christ">
<h1 style="text-align:center;font-size:40px">Christ</h1>
<img style="background-color:white" src="1.jpg" width="350px;height:500px"/>
<img style="background-color:white" src="2.jpg" width="234px"/>
<img style="background-color:white" src="3.jpg" width="430px"/>
<img style="background-color:white" src="4.jpg" width="475px;height:500px"/>
<xsl:apply-templates/>
</xsl:template>
<xsl:template match="modules">
	<xsl:apply-templates select="title"/>
	<p style="text-align:center;"><b>Domain'S SERVICE DONE</b></p>
<table cellpadding="4" border="1" width="600" style="margin-left: auto;
  margin-right: auto;" >
		<tr>
			<th>id</th>
			<th>Subjects</th>
			<th>subjectCode</th>
			<th>DESCRIPTION</th>
			<th>progress</th>
			<th>reviewno</th>
		
		</tr>	
	<xsl:for-each select="Domain">	
	    <xsl:if test="@reviewno=1">
			<tr>
				<td><xsl:value-of select="@id"/></td>
				<td><xsl:value-of select="@Subjects"/></td>
				<td><xsl:value-of select="@subjectCode"/></td>
				<td><xsl:value-of select="@SubjectTopic"/></td>
				<td><xsl:value-of select="@progress"/></td>
				<td><xsl:value-of select="@reviewno"/></td>
			</tr>	
	    </xsl:if>	
	</xsl:for-each>
	</table>
<p style="text-align:center"><b>Domain'S SERVICE PENDING</b></p>
<table cellpadding="4" border="1" width="600" style="margin-left: auto;
  margin-right: auto;">
		<tr>
			<th>id</th>
			<th>Subjects</th>
			<th>subjectCode</th>
			<th>DESCRIPTION</th>
			<th>progress</th>
			<th>reviewno</th>
		
		</tr>	
	<xsl:for-each select="Domain">	
	    <xsl:if test="@reviewno=0">
			<tr>
				<td><xsl:value-of select="@id"/></td>
				<td><xsl:value-of select="@Subjects"/></td>
				<td><xsl:value-of select="@subjectCode"/></td>
				<td><xsl:value-of select="@SubjectTopic"/></td>
				<td><xsl:value-of select="@progress"/></td>
				<td><xsl:value-of select="@reviewno"/></td>
			</tr>	
	    </xsl:if>	
	</xsl:for-each>
	</table>
<xsl:apply-templates/>
</xsl:template>

<xsl:template match="title">
	
</xsl:template>
	
<xsl:template match="m/Researcher">

		<xsl:choose>
		<xsl:when test="topic='Engine'">
		<h2 style="text-align:center;color:white">DISPLAYING Researcher topic <xsl:value-of select="topic"/></h2>
	<ul>
     <li><b> topic    : <xsl:value-of select="topic"/></b></li>
	<li>ID      : <xsl:value-of select="id"/></li>
     <li>  NAME    : <xsl:value-of select="name"/></li>
     <li>   ADDRESS : <xsl:value-of select="address"/></li>
      <li>  PHONE   : <xsl:value-of select="phone"/></li>
      
	
	</ul>
</xsl:when>
 <xsl:when test="topic='ALL'">
	<h2 style="text-align:center;color:red">DISPLAYING Researcher topic <xsl:value-of select="topic"/></h2>	
	<ul>
 <li>  <b> topic    : <xsl:value-of select="topic"/></b></li>
	<li>ID      : <xsl:value-of select="id"/></li>
     <li> NAME   : <xsl:value-of select="name"/></li>
     <li>   ADDRESS : <xsl:value-of select="address"/></li>
      <li>  PHONE   : <xsl:value-of select="phone"/></li>
     
	
	</ul>
</xsl:when>
 <xsl:when test="topic='Parts'">
	<h2 style="text-align:center;color:blue">DISPLAYING Researcher topic <xsl:value-of select="topic"/></h2>	
	<ul >
 <li>  <b> topic    : <xsl:value-of select="topic"/></b></li>
	<li>id      : <xsl:value-of select="id"/></li>
     <li>  name    : <xsl:value-of select="name"/></li>
     <li>   address : <xsl:value-of select="address"/></li>
      <li>  phone   : <xsl:value-of select="phone"/></li>
     
	
	</ul>
</xsl:when>
<xsl:otherwise>
	<h2 style="text-align:center;color:darkred">DISPLAYING Researcher topic <xsl:value-of select="topic"/></h2>	
	<ul>
 <li>  <b> topic    : <xsl:value-of select="topic"/></b></li>
	<li>id      : <xsl:value-of select="id"/></li>
     <li>  name    : <xsl:value-of select="name"/></li>
     <li>   address : <xsl:value-of select="address"/></li>
      <li>  phone   : <xsl:value-of select="phone"/></li>
     
	
	</ul>
</xsl:otherwise>
</xsl:choose>
</xsl:template>
</xsl:stylesheet>
